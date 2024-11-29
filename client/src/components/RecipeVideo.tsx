import "/src/pages/RecipePage/RecipeVideo.css";
import type { RecipeVideoProps } from "../types/RecipePage";

function RecipeVideo({ videoUrl }: RecipeVideoProps) {
  return (
    <>
      <aside className="container-recipe-video">
        <iframe
          className="child-recipe-video"
          key={videoUrl}
          src={videoUrl}
          title="YoutubeVideo"
        />
      </aside>
    </>
  );
}

export default RecipeVideo;
