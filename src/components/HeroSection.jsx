//components/HeroSection.jsx
import {FaEnvelope, FaMessage, FaPhone} from "react-icons/fa6";
import ContactForm from "./ContactForm.jsx";
import {useState} from "react";

const playList = [
    {
        name: 'Mix Live - Rap Francais 2024',
        description: 'Un mix de 30 minutes réalisé en live, rap francais 2024. En téléchargement libre.',
        writer: 'DJ Mika - Private Events',
        img: '/elements/covers/private-events-mix-rap-2024.png',
        src: '/recordings/Mix_Rap_Francais_2024_DJ-MIKA_Private-Events.wav',
        id: 2,
    },
    {
        name: 'Mix généraliste de 1970 à aujourd\'hui',
        description: 'Vous trouverez un mix généraliste réalisé en live, en téléchargement libre avec des titres des années 1970 à nos jours.',
        writer: 'DJ Mika - Private Events',
        img: '/elements/covers/mix-1970-2024.png',
        src: '/recordings/Mix_Generaliste_DJ-MIKA_Private-Events_2024.mp3',
        id: 1,
    }
]



function Player (){
    return (
        <>
            {playList.map((record) => (
                <div key={record.id} className={"fc g1 record"}>
                    <div className={"fr g1 record-details"}>
                        <img src={record.img} alt={record.name} />
                        <div className={"fc g1"}>
                            <h3>{record.name}</h3>
                            <p style={{opacity:0.6}}>{record.writer}</p>
                            <p>{record.description}</p>
                        </div>
                    </div>
                    <audio controls style={{width:"100%"}}>
                        <source src={record.src} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ))}
        </>
    )
}

function HeroSection() {
    const [selectedSubject, setSelectedSubject] = useState('prise de contact');

    return (
        <>
            <div style={{width: "100%", padding: 0, position: "fixed", backgroundColor: "#191100ba"}}>

                <navbar className={"fr jc-sb ai-c"} style={{width: "auto", position: "relative"}}>
                    <a href={"https://privateevents.fr"}><img src={"/elements/logo.png"} alt={"logo"}/></a>
                    <div className={"fr ai-c links"}
                         style={{padding: "1rem 2rem", borderRadius: '1rem', gap: '1rem', color: "white"}}>
                        <a href={"#repertoire"}>Répertoire</a>
                        <a href={"#contact"} >Contact</a>
                    </div>
                </navbar>
            </div>

            <div className={"hero"}>
                <section className={"fc ai-fs herosection noBoth"}>
                    <div className={"fc g1"}>
                        <h1 className="text-gradient">
                            Donnez vie à vos soirées avec DJ Mika.
                        </h1>
                        {/*<h1>Donnez vie à vos soirées avec DJ Mika.</h1>*/}
                        <div>
                            <p>Besoin d'une ambiance musicale et de karaoké pour vos événements privés ou soirées
                                corporates ? DJ Mika est là pour vous offrir une expérience inoubliable.</p>
                            <p>DJ Mika apporte une touche de magie à chaque occasion. Profitez d'une ambiance sur-mesure
                                avec notre service de DJ et de karaoké professionnel, conçu pour transformer vos
                                événements en souvenirs mémorables.</p>

                        </div>
                        <div className={"fr g1"}>
                            <a className={"button fr g0-5 ai-c"} href={"#contact"} onClick={() => {
                                setTimeout(() => {
                                    setSelectedSubject("prise de contact")
                                }, 50)
                            }}><FaMessage/>Contact</a>
                    </div>
                    <div className={"tags"}>
                        <p>Ambiance musicale</p>
                        <p>Karaoké</p>
                    </div>
            </div>

                </section>
            </div>


            <section>
                <h1 className="text-gradient">
                    Vivez une expérience musicale inoubliable
                </h1>
                <p>
                    Fort de plusieurs années d'expérience dans l'animation musicale, DJ Mika sait comment captiver son
                    public. Grâce à son expertise et à son équipement de pointe, il crée une atmosphère vibrante adaptée
                    à l'esprit de votre événement. Laissez-vous emporter par une sélection musicale variée et une
                    prestation karaoké dynamique qui laisseront à vos invités des souvenirs inoubliables.
                </p>
            </section>

            <section id={"repertoire"}>
                <div className={"fc g1"}>
                    <h2 className="text-gradient">Répertoire</h2>
                    <p> Merci pour votre écoute et pour vos commentaires. N’hésitez à proposer des listes de 10 à 15
                        titres pour que je vous propose des sets sur mesures gratuitement. Bonne écoute. </p>
                    <div className={"fc g1"}>
                        {/* Audio player file /elements/records/2024-12.mp3 */}
                        <Player/>
                    </div>
                    <div className={"fc ai-c"}>
                        <a href="#contact" className={"button"}
                           onClick={() => setSelectedSubject("demander set sur mesure gratuit")}>Demander un set sur
                            mesure gratuit</a>
                    </div>
                </div>
            </section>

            <section>
                <div className={"fr ai-c herosection"}>
                    <img src={"/elements/photos/dj-experience.png"} alt={"dj"}/>
                    <div>
                        <h2 className="text-gradient">Un répertoire musical varié pour tous les goûts</h2>
                        <p>Notre répertoire s'étend des grands classiques qui traversent les époques aux dernières
                            nouveautés qui font vibrer les charts. DJ Mika prend le temps de comprendre vos préférences
                            et celles de vos invités pour créer une playlist personnalisée qui assure une ambiance
                            parfaite du début à la fin de votre événement.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className={"fr ai-c herosection"}>
                    <div>
                        <h2 className="text-gradient">Karaoké : montez sur scène et brillez</h2>
                        <p>Le karaoké de DJ Mika n'est pas juste un divertissement, c'est une expérience immersive où
                            chacun peut être une star. Avec un large choix de chansons et des équipements de qualité
                            professionnelle, nous offrons une scène où la performance rencontre la fête, créant ainsi
                            des moments uniques de complicité et de divertissement.
                        </p>
                    </div>
                    <img src={"/elements/photos/dj-karaoke.jpeg"} alt={"dj"}/>
                </div>
            </section>

            <section>
                <div className={"fr ai-c herosection"}>
                    <img src={"/elements/photos/dj-setup.png"} alt={"dj"}/>
                    <div>
                        <h2 className="text-gradient">Un équipement de qualité</h2>
                        <p>La qualité de votre expérience est notre priorité. C'est pourquoi DJ Mika utilise
                            exclusivement un équipement audio et visuel de haute gamme. De la clarté du son aux effets
                            lumineux époustouflants, chaque détail technique est pensé pour sublimer votre événement.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className={"fr ai-c herosection"}>

                    <div>
                        <h2 className="text-gradient">Événements privés ou soirées corporates</h2>
                        <p>Peu importe la taille ou le type de votre événement, DJ Mika s'engage à fournir une
                            prestation de qualité supérieure qui répond à vos attentes. Du conseil initial à la
                            performance finale, bénéficiez d'un accompagnement personnalisé pour une expérience musicale
                            qui marque les esprits.
                        </p>
                    </div>
                    <img src={"/elements/photos/dj-soiree.png"} alt={"dj"}/>
                </div>
            </section>

            <section>
                <div className={"fr ai-c herosection"}>
                    <img src={"/elements/photos/dj-vaucluse.jpeg"} alt={"dj"}/>
                    <div>
                        <h2 className="text-gradient">Animation Musicale en Provence : Vaucluse, Var et au-delà</h2>
                        <p>
                            DJ Mika élargit son terrain de jeu musical au-delà des frontières du Vaucluse pour embrasser
                            également le Var et ses régions limitrophes. Quelle que soit la localité, de l'effervescence
                            d'Avignon aux charmes côtiers de Saint-Tropez, en passant par les villages du Luberon et les
                            paysages sauvages du Verdon, DJ Mika assure une ambiance mémorable à chaque événement.
                            Embarquez pour une expérience musicale sans frontières, où chaque note reflète la beauté et
                            la diversité de la Provence et de ses environs.
                        </p>
                    </div>
                </div>
            </section>


            <div className={"testimonial"} style={{padding: "3rem 2rem"}}>
                <section>
                    <div className={"fc ai-c "}>
                        <h2>"Je suis ravi d'avoir choisi DJ Mika pour animer ma soirée. Il a suffit de lui donner nos
                            préférences musicales et il a su créer une ambiance qui a rendu l'événement
                            inoubliable."</h2>
                        <p>06/12/2023</p>
                    </div>
                </section>
            </div>

            <section id={"contact"}>
                <div className={"fc g1"}>
                    <ContactForm subject={selectedSubject} onSubjectChange={setSelectedSubject} />
                </div>
                <br/>
                <div className={"fr g1 fw-w"}>
                    <a className={"button fr g0-5 ai-c"} href="mailto:contact@privateevents.fr"><FaEnvelope/>contact@privateevents.fr</a>
                    <a className={"button fr g0-5 ai-c"} href="callto:0782737661"><FaPhone/>0782737661</a>
                </div>
            </section>

            <section>
                <div className={"fc g1"}>
                    <div className={"fr"} style={{gap: '0.3rem', fontSize: '1rem', opacity: 0.8}}>
                    Site réalisé par <a style={{color: "#C7B28F", textDecoration:'underline'}} href={"https://mondon.pro"}>Arthur Mondon</a>
                    </div>
                </div>
            </section>


        </>

    );
}

export default HeroSection;