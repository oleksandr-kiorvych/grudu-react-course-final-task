import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ITweet } from '../interfaces/Tweet';

interface ITwitState {
  tweets: {
    items: ITweet[] | null;
    isLoading: boolean;
    error: string | null;
  };
  fetchTwits: () => void;
  addTweet: (tweet: Omit<ITweet, 'id'>) => void;
}

export const useTweetStore = create<ITwitState>()(
  devtools(
    (set) => ({
      tweets: {
        items: null,
        isLoading: false,
        error: null,
      },
      fetchTwits: async () => {
        try {
          set((state) => ({
            tweets: { isLoading: true, error: null, items: state.tweets.items },
          }));

          const response = await fetch('http://localhost:3001/tweets');

          if (!response.ok) throw Error();

          set({
            tweets: {
              isLoading: false,
              items: await response.json(),
              error: null,
            },
          });
        } catch (error) {
          set((state) => ({
            tweets: {
              isLoading: false,
              items: state.tweets.items,
              error: 'Error while getting tweets',
            },
          }));
        }
      },
      addTweet: async (tweet: Omit<ITweet, 'id'>) => {
        try {
          set((state) => ({
            tweets: { isLoading: true, error: null, items: state.tweets.items },
          }));

          const response = await fetch('http://localhost:3001/tweets', {
            method: 'POST',
            body: JSON.stringify(tweet),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });

          if (!response.ok) throw Error();

          const newTweet = (await response.json()) as ITweet;

          set((state) => ({
            tweets: {
              isLoading: false,
              error: null,
              items: [...(state.tweets.items || []), newTweet],
            },
          }));
        } catch (error) {
          set((state) => ({
            tweets: {
              items: state.tweets.items,
              isLoading: false,
              error: 'Error while creating a tweet',
            },
          }));
        }
      },
    }),
    { name: 'tweetStore' }
  )
);
