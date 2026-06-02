function NewsLetter(){
    return(
        <div className="py-20 bg-accent-light">
            {/* container */}
            <div className="max-w-6xl px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-800 mb-6 mx-auto max-w-2xl">Get design tips, project inspiration, and exclusive offers directly to your inbox.</p>

                    <form action="" className="flex max-w-xl mx-auto flex-col md:flex-row gap-4 ">
                        <input type="email" className=" placeholder:text-white rounded-full bg-gray-900 border-gray-600 placeholder:text-sm px-6 py-4 grow" placeholder="Your Email Address"/>
                        <button className="rounded-full bg-accent py-3 px-5 text-white font-bold border ">
                            Subscribe
                        </button>
                    </form>

                </div>

            </div>

        </div>

    );
}
export default NewsLetter;