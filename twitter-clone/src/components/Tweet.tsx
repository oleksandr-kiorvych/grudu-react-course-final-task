import { ITweet } from '../interfaces/Tweet';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Tweet: React.FC<{ tweet: ITweet }> = ({ tweet }) => {
  return (
    <div className="bg-slate-200 flex flex-col items-start p-3 rounded-md mt-2 w-full max-w-md border-slate-950 border-2">
      <h2 className="text-amber-700 font-bold text-lg">{tweet.author_id}</h2>
      <Markdown
        className="mt-2"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {tweet.text}
      </Markdown>
    </div>
  );
};

export default Tweet;
