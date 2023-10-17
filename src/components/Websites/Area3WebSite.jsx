import React from "react";
import Area3WebSiteItem from "./Area3WebSiteItem";

const Area3WebSite = () => {
  return (
    <section className="overflow-hidden relative bg-white dark:bg-zinc-950">
      
      <div className=" px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32  sm:px-6 md:px-14 lg:px-20 ">
      <p className=" text-4xl w-full text-center mb-24 dark:text-white text-zinc-950 ">Teste Titulo</p>
        <div className="  text-gray-500 gap-8 sm:grid grid-cols-2 sm:text-lg  ">
          <Area3WebSiteItem title="meu tituloaaaaaaaaaaaa" per="25" text="rw0sedfkcw weopfikr we0 weiorum weirj ewri mnweop"/>
          <Area3WebSiteItem title="meu tituloaaaaaaaaaaaa" per="50" text="rw0sedfkcw weopfikr we0 weiorum weirj ewri mnweop"/>
          <Area3WebSiteItem title="meu tituloaaaaaaaaaaaa" per="75" text="rw0sedfkcw weopfikr we0 weiorum weirj ewri mnweop"/>
          <Area3WebSiteItem title="meu tituloaaaaaaaaaaaa" per="100" text="rw0sedfkcw weopfikr we0 weiorum weirj ewri mnweop"/>
        </div>
      </div>
    </section>
  );
};

export default Area3WebSite;
