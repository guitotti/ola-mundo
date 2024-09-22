import './Post.css';
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModelo from "../PostModelo";
import ReactMarkdown from "react-markdown";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  console.log(post);

  return (
    <PostModelo fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
