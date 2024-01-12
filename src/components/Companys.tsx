import companys from "../data/companys.json";

const Companys = () => {
  return (
    <div className="flex items-center justify-between py-8">
      {companys.map((company) => (
        <div key={company.id}>
          <img src={company.url} alt="Company" />
        </div>
      ))}
    </div>
  );
};

export default Companys;
