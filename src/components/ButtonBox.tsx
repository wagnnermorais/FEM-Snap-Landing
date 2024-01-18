const ButtonBox = () => {
  return (
    <div>
      <button
        className="hover:text-almost-black duration-300 sm:my-2 sm:w-full"
        type="button"
      >
        Login
      </button>
      <button
        className="px-6 py-2 border-2 rounded-2xl border-medium-gray hover:border-almost-black hover:text-almost-black duration-300  sm:my-2 sm:w-full"
        type="button"
      >
        Register
      </button>
    </div>
  );
};

export default ButtonBox;
