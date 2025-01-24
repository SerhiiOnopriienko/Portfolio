import styles from "./ClientsAreSaying.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrewArrow } from "../../UI/Arrows";
import { NextArrow } from "../../UI/Arrows";

export default function ClientsAreSaying() {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow classToUse={styles.nextClients} />,
    prevArrow: <PrewArrow classToUse={styles.prevClients} />,
    className: styles.clientsSlider,
    slidesToShow: 1,
  };
  return (
    <>
      <div className={styles.clientsAreSayingHeader}>
        <h2>Clients are saying</h2>
      </div>
      <div className={styles.backgroundContainer}>
        <Slider {...settings}>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>Scott</h3>
              <p>President and Executive Producer</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                Thank you for your dedication and genuine caring in helping to
                make the UNICEF event such a success. But most importantly you
                went the extra mile on site as little "fires" arose.
              </p>

              <p>
                A pleasure working with such a dedicated professional. 
                Appreciate you and your team's effortson Friday.
              </p>

              <p>Until next time...</p>

              <p>Best regards</p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>randy jackson</h3>
              <p>American executive and television presenter</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                I can manage different events, but i had an experience, when my
                partners were very busy with their things and couldn't help me,
                and i need to find qualified people who do their job properly.
                The main point for them was to provide high-quality sound within
                a bit extreme conditions....
              </p>

              <p>
                If i am not mistaken, we required 6 microphones and event's
                gonna be covered acoustically perfect! Web helped me much, and I
                got the contacts of “1987''. must say, i am glad they helped me.
                i even had many things recommended, other words, decisions they
                make are methods're of high usability.
              </p>

              <p>
                Thanks for being responsible, it proves that you must du what
                you do.
              </p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>justin choi</h3>
              <p>ceo</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                What to say... one of my bosses told me to make a wow laser show
                for the finest, first i’ve been dealing with one agency whose
                service's not mych xpensive. They took our money in advance and
                then stared on the wall,,, i was much shocked on that, hey, that
                was the only time, i risked actually to be fired, i'm hazy about
                another position in other company that i could find that for the
                same money that my bosses paid me. Friend in need is a friend
                indeed - genius was a man who said like that. One friend of mine
                saved my career and said that I should be in touch with Master
                1987. I had nothing more to do cause i missed all possible
                deadlines. - Though their service is not as cheap as chips, both
                satisfied with what we have both done. Good luck guys! wish you
                success, what costs little, is little esteemed., or is not
                esteemed at all.
              </p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>paula park</h3>
              <p>Marketing and Impact Manager</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                Our company first cooperated with Masters 1987 half a year ago.
                We had to find somebody able to provide perfect sound during the
                session, not only make it louder than a bomb, but the quality
                ought to meet the requirements set. Then was another problem we
                had faced. The event itself was an open-air. and one of our
                substantial tasks was to provide proportional distribution of
                sound.. Masters 1987 have shown their best skills but that is
                only half done.. They even suggested their approaches in things
                we need to implement. And till now i have contacted many
                different teams, but i had not found enough qualified experts,
                like Masters 1987 are.
              </p>

              <p>Keep in touch!</p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>Casey Dolkas</h3>
              <p>Vice President of Business Development & Creative Projects</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                Once, our task was to organize an outstanding event, and we had
                to use not only sound and light effects, but also to deal with
                televiewers, projectors, and what's more important that we had
                to make like a whole laser-show! We had to spent much time
                looking for some team whose skills would be professional enough
                to fulfil our task. That was a bit complicated to do that,
                because last time we already had an occasion when so-called,
                “specialists” had let us down! We followed some advice to
                cooperate with Masters 1987, I have just answered primal
                questions, got through the briefing and... that was all I had to
                do! All other things to do was the part of work of "1987"-Team.
              </p>

              <p>Event went well enough!</p>

              <p>Thank you!</p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>Drew</h3>
              <p>CEO</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                Just wanted to take a moment to thank you for your hard work.
                Each of you helped us take the show to the next level
              </p>

              <p>
                This proved to be a complex show with many competing and
                conflicting demands and you all handled it professionally and
                courteously. Each of your efforts to improvise and problem solve
                on the fly did not go unnoticed and I truly appreciate your
                commitment to the job.
              </p>

              <p>
                So, CHEERS to a great show and I look forward to working with
                you in the future! 
              </p>
            </div>
          </div>
          <div className={styles.slideContainer}>
            <div className={styles.headerInSlider}>
              <h3>CHUCK</h3>
              <p>EVENT PRODUCER</p>
            </div>
            <div className={styles.sliderTextContainer}>
              <p>
                The show went perfectly, even with some last minute changes we
                made. Every member of the crew was professional and helpful.
                Rowland was a great help with every request we made. My thanks
                for all your contributions to our success.
              </p>
              <p>We look forward to working with you again in the future.</p>
            </div>
          </div>
        </Slider>
        <div className={styles.desktopText}>
          <h2>
            We understand that its the most important event for you
            <span>.</span>
            That's why we treat your event as our own<span>.</span>
          </h2>
        </div>
      </div>
    </>
  );
}
