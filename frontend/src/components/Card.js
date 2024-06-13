function Card(props){
    return(
        <>
            <div className="flex py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://avatars.githubusercontent.com/u/120650364?s=400&u=65d35b3ec16414d96ea08b2e66f70247fe61dabc&v=4" alt="Woman's Face" />
                <div className=" text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.id}
                    </p>
                    <p className="text-lg text-black font-semibold">
                        {props.first_name}
                    </p>
                    <p className="text-lg text-black font-semibold">
                        {props.last_name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.email}
                    </p>
                    </div>
                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                </div>
            </div>
        </>
    );
}

export default Card;