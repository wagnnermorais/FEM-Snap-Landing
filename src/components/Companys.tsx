import companys from "../data/companys.json";

const Companys = () => {
  return (
    <div className="flex items-center justify-between gap-9">
      {companys.map((company) => (
        <div key={company.id}>
          <img src={company.url} alt="Company" />
        </div>
      ))}
    </div>
  );
};

export default Companys;
