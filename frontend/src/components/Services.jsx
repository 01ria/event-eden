import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://static.vecteezy.com/system/resources/thumbnails/029/317/657/small_2x/celebration-setting-lively-decorations-make-for-a-spirited-birthday-party-background-ai-generated-photo.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://rukminim2.flixcart.com/image/850/1000/l2krs7k0/birthday-combo/a/k/e/wedding-anniversary-party-decoration-kit-5-anniversary-theme-my-original-imagdw4ryjfzz5xd.jpeg?q=20&crop=false",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750/v1/classpop/blog/backyard-camping-bachelor-party-idea_666bc3afb2912.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://www.rthgroup.com/wp-content/uploads/2018/10/foosball3-1030x736.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/energetic-dance-floor-with-people-celebrating-birthday_1268-30665.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718582400&semt=sph",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://cdn0.hitched.co.uk/vendor/6283/3_2/960/jpeg/image1_4_196283-168932844195230.jpeg",
      title: "Wedding Planning",
    },
    {
        id: 7,
        url: "https://www.chennaiconventioncentre.com/wp-content/uploads/2019/02/chennaiCC-820x410.jpg",
        title: "Corporate Events",
      },
      {
        id: 8,
        url: "https://files.prokerala.com/news/photos/imgs/1024/gathering-at-programme-on-150th-anniversary-of-1694164.jpg",
        title: "Festival Gatherings",
      },
      {
        id: 9,
        url: "https://img.freepik.com/premium-photo/classical-symphony-orchestra-performing-grand-concert-hall-musicians-with-instruments-elegant-setting-perfect-culture-themes-music-events-ai_372197-19978.jpg",
        title: "Music Events",
      },
      {
        id: 10,
        url: "https://p.turbosquid.com/ts-thumb/Xk/cJtew4/i1/renderiv/jpg/1614178730/600x600/fit_q87/3dd2882a403ad9fc97f96630b6b2bf361b30822a/renderiv.jpg",
        title: "Exhibitions",
      },
      {
        id: 11,
        url: "https://deepalidesigns.com/img/1404_MG_6416.jpg",
        title: "Sport Events",
      },
      {
        id: 12,
        url: "https://www.table-art.co.uk/wp-content/uploads/2019/07/tortworth-court-blossom-branded-arc-table-centrepiece.jpg",
        title: "Award Ceremony",
      },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;