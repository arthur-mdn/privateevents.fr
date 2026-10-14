import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  defaultConsent,
  readStoredConsent,
  writeStoredConsent,
} from '../seo/cookieConsent.js';

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => {
    if (typeof window === 'undefined') return defaultConsent;
    return readStoredConsent() ?? defaultConsent;
  });
  const [bannerOpen, setBannerOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !readStoredConsent()?.decided;
  });
  const [prefsOpen, setPrefsOpen] = useState(false);

  const persist = useCallback((next) => {
    const saved = writeStoredConsent(next);
    setConsent(saved);
    setBannerOpen(false);
    setPrefsOpen(false);
    return saved;
  }, []);

  const acceptAll = useCallback(() => {
    persist({ analytics: true, media: true });
  }, [persist]);

  const refuseAll = useCallback(() => {
    persist({ analytics: false, media: false });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs) => {
      persist({
        analytics: Boolean(prefs.analytics),
        media: Boolean(prefs.media),
      });
    },
    [persist],
  );

  const acceptMedia = useCallback(() => {
    persist({
      analytics: Boolean(consent.analytics),
      media: true,
    });
  }, [persist, consent.analytics]);

  const openPreferences = useCallback(() => {
    setPrefsOpen(true);
    setBannerOpen(false);
  }, []);

  const closePreferences = useCallback(() => {
    setPrefsOpen(false);
    if (!consent.decided) setBannerOpen(true);
  }, [consent.decided]);

  const value = useMemo(
    () => ({
      consent,
      bannerOpen,
      prefsOpen,
      acceptAll,
      refuseAll,
      acceptMedia,
      savePreferences,
      openPreferences,
      closePreferences,
      hasMediaConsent: Boolean(consent.media),
      hasAnalyticsConsent: Boolean(consent.analytics),
    }),
    [
      consent,
      bannerOpen,
      prefsOpen,
      acceptAll,
      refuseAll,
      acceptMedia,
      savePreferences,
      openPreferences,
      closePreferences,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return ctx;
}
