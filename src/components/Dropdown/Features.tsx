const Features = () => {
  return (
    <menu className="flex flex-col gap-2 mt-4 px-6 lg:py-5 md:-left-16 bg-white lg:shadow-md rounded-xl lg:absolute md:z-10 md:top-full duration-300 sm:pb-4">
      <li className="flex items-center gap-4">
        <img src="/icon-todo.svg" alt="List Icon" />
        <a href="#" className="w-24">
          Todo List
        </a>
      </li>
      <li className="flex items-center gap-4">
        <img src="/icon-calendar.svg" alt="List Icon" />
        <a href="#">Calendar</a>
      </li>
      <li className="flex items-center gap-4">
        <img src="/icon-reminders.svg" alt="List Icon" />
        <a href="#">Reminders</a>
      </li>
      <li className="flex items-center gap-4">
        <img src="/icon-planning.svg" alt="List Icon" />
        <a href="#">Planning</a>
      </li>
    </menu>
  );
};

export default Features;
