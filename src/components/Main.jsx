const Main = ({ data }) => {
  return (
    <main>
      <div className="bgImageContainer">
        <img
          src={data?.hdurl}
          alt={data.title || "bg-img"}
          className="bgImage"
        />
      </div>
    </main>
  );
};

export default Main;
