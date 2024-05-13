const Card = ({ data }) => {
  return (
    <div className="flex flex-col justify-start items-center h-96 w-56 mx-4 mt-2">
      <div className="h-80 w-full flex flex-col items-center mb-2 cursor-pointer">
        <img
          src={data.images.jpg.image_url}
          alt={data.title}
          className="h-full w-full rounded-lg shadow-slate-800 shadow-md transition-opacity duration-300 ease-in-out hover:opacity-50"
        />
      </div>
      <h3 className="text-xl text-white">
        {data.title.split(" ", 3).join(" ")}
      </h3>
    </div>
  );
};

export const CardRow = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.mal_id} data={item} />
      ))}
    </>
  );
};
