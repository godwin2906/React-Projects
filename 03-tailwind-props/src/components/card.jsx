import React from "react";

function Card({userName = "Godwin"}) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/27897719/pexels-photo-27897719/free-photo-of-a-black-and-white-photo-of-a-person-walking-through-a-tent.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>{userName}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
