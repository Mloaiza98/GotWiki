function CharacterCard(data) {
  data = data.data;
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 mb-10 shadow-xl rounded-lg text-gray-900 bg-slate-600">
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 w-32"
          src={data.imageUrl}
          alt={data.image}
        ></img>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{data.fullName}</h2>
        <p className="text-white">{data.family}</p>
      </div>
    </div>
  );
}
export default CharacterCard;
