import { useEffect } from 'react';
import { useFormik } from 'formik';

import Textarea from '../components/Textarea';
import Tweet from '../components/Tweet';
import { useTweetStore } from '../zustand/TweetStore';
import { useUserStore } from '../zustand/UserStore';
import Button from '../components/Button';
import { tweetInputSchema } from '../utils/formSchemas';

const Home = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      tweet: '',
    },
    validationSchema: tweetInputSchema,
    onSubmit: async () => {
      if (!author_id || !isValid) return;
      addTweet({ text: values.tweet, author_id });
    },
  });

  const {
    isLoading,
    error,
    items: tweets,
  } = useTweetStore((state) => state.tweets);

  const fetchTwits = useTweetStore((state) => state.fetchTwits);
  const addTweet = useTweetStore((state) => state.addTweet);
  const { id: author_id } = useUserStore((state) => state.user);

  useEffect(() => {
    fetchTwits();
  }, [fetchTwits]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <Textarea
          className="w-[23rem]"
          name="tweet"
          onChange={handleChange}
          onBlur={handleBlur}
        />{' '}
        {touched.tweet && errors.tweet ? (
          <span className="text-red-400 font-bold">{errors.tweet}</span>
        ) : null}
        <Button disabled={!isValid} className="mt-2" secondary type="submit">
          Submit
        </Button>
      </form>

      {isLoading ? (
        <h2 className="text-slate-100 font-bold">Loading...</h2>
      ) : null}
      {error ? <h2 className="text-red-400 font-bold">{error}</h2> : null}
      {tweets?.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Home;
