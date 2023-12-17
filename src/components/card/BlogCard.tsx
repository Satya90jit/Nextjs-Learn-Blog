const BlogCard = ({ post }: any) => {
    return (
        <section>
            <div className="mb-8">
                <h1 className="text-2xl font-bold">{post?.title}</h1>
                <p className="text-gray-600">{post?.desc}</p>
                <img src={post?.image} alt="Blog" className="mt-4 h-48 w-52" />
            </div>
        </section>
    );
};
export default BlogCard;
