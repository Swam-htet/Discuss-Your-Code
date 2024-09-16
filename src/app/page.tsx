import PostList from '@/components/posts/PostList';
import PostShowLoading from '@/components/posts/PostShowLoading';
import TopicCreateForm from '@/components/topics/TopicCreateForm';
import TopicList from '@/components/topics/TopicList';
import { fetchTopPosts } from '@/db/query/posts';
import { fetchTopics } from '@/db/query/topics';
import { Divider } from '@nextui-org/react';
import { Suspense } from 'react';

export default async function Home() {
     return (
          <div className="grid grid-cols-4 gap-4 p-4">
               <div className="col-span-3">
                    <h1>Home</h1>
                    <Suspense fallback={<PostShowLoading />}>
                         <PostList fetchData={fetchTopPosts} />
                    </Suspense>
               </div>
               <div>
                    <TopicCreateForm />
                    <Divider className="my-3" />
                    <>
                         <h1 className="text-lg my-2">Topics</h1>
                         <TopicList fetchData={fetchTopics} />
                    </>
               </div>
          </div>
     );
}
