import styles from "./Media.module.css";
import whoWeAreStyles from "../WhoWeAre/WhoWeAre.module.css";
import commonStyles from "../Media/Media.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIDs, fetchPosts } from "../../../thunk/posts";

export default function Media() {
  const dispatch = useDispatch();

  let { id, posts } = useSelector((state) => state.initialReducer);

  useEffect(() => {
    dispatch(fetchIDs());
  }, [dispatch]);

  useEffect(() => {
    if (id.length && posts.length <= 9) {
      id.map((item) => dispatch(fetchPosts(item.id)));
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className={styles.getSocialContainer}>
      <div className={whoWeAreStyles.whoWeAreHeader}>
        <h2>Get social</h2>
        <p
          className={`${commonStyles.socialText} ${commonStyles.desktopSocialText}`}
        >
          Stay connected with our production community and stay informed about
          our latest projects by following us on Instagram
        </p>
      </div>
      <div className={whoWeAreStyles.outerContainer}>
        <div className={whoWeAreStyles.emptyContainer}></div>
        <div
          className={`${whoWeAreStyles.textContainer} ${styles.textContainer}`}
        >
          <div>
            <p
              className={`${commonStyles.socialText} ${commonStyles.mobileSocialText}`}
            >
              Stay connected with our production community and stay informed
              about our latest projects by following us on Instagram
            </p>
          </div>
          <div className={styles.instagram}>
            {posts.slice(0, 9).map((post) => {
              return (
                // eslint-disable-next-line
                <a key={post.id} href={post.permalink} target="_blank">
                  <img
                    key={post.id}
                    src={post.thumbnail_url ?? post.media_url}
                    alt={post.id}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// request to get user ID
// https://graph.instagram.com/me?fields=id,username&access_token={ACCESS_KEY}
