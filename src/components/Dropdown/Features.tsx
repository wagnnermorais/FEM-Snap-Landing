const Features = () => {
  return (
    <menu className="flex flex-col gap-2 mt-4 p-6 -left-16 bg-white shadow-md rounded-xl absolute z-10 top-full duration-300">
      <li className="flex items-center gap-4">
        <img src="src/assets/icon-todo.svg" alt="List Icon" />
        <a href="#" className="w-24">
          Todo List
        </a>
      </li>
      <li className="flex items-center gap-4">
        <img src="src/assets/icon-calendar.svg" alt="List Icon" />
        <a href="#">Calendar</a>
      </li>
      <li className="flex items-center gap-4">
        <img src="src/assets/icon-reminders.svg" alt="List Icon" />
        <a href="#">Reminders</a>
      </li>
      <li className="flex items-center gap-4">
        <img src="src/assets/icon-planning.svg" alt="List Icon" />
        <a href="#">Planning</a>
      </li>
    </menu>
  );
};

export default Features;
