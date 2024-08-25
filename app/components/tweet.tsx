import { type ReactNode, Suspense } from "react";
import { Tweet, getTweet } from "react-tweet/api";
import {
  EmbeddedTweet,
  TweetNotFound,
  TweetSkeleton,
  type TweetProps,
} from "react-tweet";
import { Caption } from "./caption";
import "./tweet.css";

interface TweetArgs {
  id: string;
  caption: ReactNode;
}

async function getAndCacheTweet(id: string): Promise<Tweet | undefined> {
  // we first prioritize getting a fresh tweet
    const tweet = await getTweet(id);
    return tweet;
}

const TweetContent = async ({ id, components }: TweetProps) => {
  const tweet = id ? await getAndCacheTweet(id) : undefined;

  if (!tweet) {
    return <TweetNotFound />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => (
  <Suspense fallback={<TweetSkeleton />}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
);

export async function TweetComponent({ id, caption }: TweetArgs) {
  return (
    <div className="tweet my-6 text-sm">
      <div className={`flex justify-center`}>
        <ReactTweet id={id} />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}