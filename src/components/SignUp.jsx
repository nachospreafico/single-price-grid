const SignUp = () => {
  return (
    <div className="bg-[#2BB3B1] flex flex-col p-6 gap-4">
      <h2 className="text-white text-2xl font-[600]">Monthly Subscription</h2>
      <div className="flex flex-row items-center gap-2">
        <p className="text-white text-4xl font-bold">$29</p>
        <p className="text-[#79E4E5]">per month</p>
      </div>
      <p className="text-white">Full access for less than $1 a day</p>
      <button className="text-white bg-[#BFDF32] p-3 rounded-lg shadow-lg">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
