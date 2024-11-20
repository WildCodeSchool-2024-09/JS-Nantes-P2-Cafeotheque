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
      />
    </aside>
  );
}

export default RecipeVideo;
