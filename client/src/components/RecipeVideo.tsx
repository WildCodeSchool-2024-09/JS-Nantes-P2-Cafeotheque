import "/src/pages/RecipeePage/RecipeVideo.css";

function RecipeVideo() {
  return (
    <aside className="recipe-video">
      <iframe
        width="640"
        height="360"
        src="http://www.youtube.com/embed/7VTtenyKRg4"
        frameBorder="0"
        title="TiramisuYoutubeVideo"
      >
        <p>
          Votre navigateur ne prend pas en charge les iframes. Vous pouvez
          visiter la page pour
          <a href="http://www.youtube.com/embed/7VTtenyKRg4">
            visualiser la vidéo
          </a>
        </p>
      </iframe>
    </aside>
  );
}

export default RecipeVideo;
