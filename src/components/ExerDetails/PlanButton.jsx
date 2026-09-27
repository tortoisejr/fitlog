/* eslint-disable react/no-unescaped-entities */
function PlanButton() {
  return (
    <div>
      <button className="text-sm rounded-lg bg-[#ccff00] text-[#232b12] space-x-2 px-2.5 py-2 cursor-pointer ">
        <i className="fa-regular fa-calendar-plus"></i>
        <span>Add to today's plan</span>
      </button>
    </div>
  );
}

export default PlanButton;
