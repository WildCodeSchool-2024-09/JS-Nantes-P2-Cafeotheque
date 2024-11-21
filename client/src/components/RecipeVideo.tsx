import "/src/pages/RecipeePage/RecipeVideo.css";
import type { RecipeVideoProps } from "../types/RecipePage";

function RecipeVideo({ videoUrl }: RecipeVideoProps) {
  return (
    <aside className="recipe-video">
      <iframe
        key={videoUrl}
        width="640"
        height="360"
        src={videoUrl}
        title="YoutubeVideo"
      />
    </aside>
  );
}

export default RecipeVideo;
