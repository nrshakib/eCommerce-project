const NewsLetter = () => {
  return (
    <div className="text-center -mt-28 pb-20">
      <h1 className="text-4xl text-slate-700 mb-2 font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-base text-zinc-800 mb-2 font-normal">
        Subscribe to our News Letter and stay updated.
      </p>
      <div>
        <input
          className="w-80 h-10 rounded-md text-center border-0"
          type="email"
          placeholder="Type Your Email ID"
        />
        <br />
        <button className="rounded-lg bg-black text-white px-2 h-10 mt-2">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
