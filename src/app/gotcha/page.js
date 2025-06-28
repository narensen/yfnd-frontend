import React from 'react';

export default function GotchaPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="bg-white border-2 border-black p-8 max-w-md w-full text-center shadow-2xl">
        <div className="text-6xl mb-6">💸</div>
        <h1 className="text-4xl font-bold text-black mb-4 tracking-wider">
          DONATION DECLINED
        </h1>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Thanks, but I&apos;m already <span className="font-bold">overfunded</span> by my caffeine addiction.
          <br />
          Your generosity has been noted in my non-existent database.
        </p>
        <div className="bg-black text-white p-4 mb-6 border">
          <p className="text-sm">
            &gt; STATUS: Rich in bugs, poor in features
            <br />
            &gt; DONATIONS_NEEDED: false
            <br />
            &gt; COFFEE_LEVEL: maximum
          </p>
        </div>
        <button className="bg-black text-white font-bold py-3 px-8 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 tracking-wide">
          TRY AGAIN? 😏
        </button>
      </div>
    </div>
  );
}