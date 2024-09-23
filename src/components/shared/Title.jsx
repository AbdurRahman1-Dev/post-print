
const Title = ({title}) => {
  return (
         <div className="flex items-center gap-5">
          <h2 className="inline-block text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2e1f74] to-[#842f93]  pb-3 uppercase">
           {title}
            </span>

          </h2>
          {/* <div className=" w-24 h-1 bg-gradient-to-r from-[#2e1f74] to-[#842f93] "></div> */}
        </div>
  );
};

export default Title;