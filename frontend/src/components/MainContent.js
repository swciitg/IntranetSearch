function MainContent({ isDark }) {
  return (
      <div
          className={`flex flex-col md:flex-row justify-around w-full px-12 md:px-20 lg:px-32 py-12 space-y-12 md:space-y-0 md:space-x-12 ${
              isDark ? 'bg-black' : 'bg-[#FFE875]'
          }`}
      >
          <Section title="Most Visited" isDark={isDark} />
          <Section title="Recent Searches" isDark={isDark} />
      </div>
  );
}

function Section({ title, isDark }) {
  return (
      <div className="w-full md:w-1/2 space-y-6">
          {/* Title */}
          <h2
              className={`text-center font-open-sans text-[40px] md:text-[48px] font-normal tracking-[0.5px] leading-tight ${
                  isDark ? 'text-[#FFE875] bg-black' : 'text-black bg-[#FFE875]'
              } p-4 rounded-md`}
          >
              {title}
          </h2>

          {/* List of Boxes */}
          <div className="flex flex-col items-center space-y-6">
              {Array(5)
                  .fill('')
                  .map((_, index) => (
                      <div
                          key={index}
                          className="flex justify-end items-center w-full max-w-[600px] h-[70px] p-4 bg-white rounded-[12px] shadow-md"
                          style={{
                              boxShadow:
                                  '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.30)',
                          }}
                      >
                          <button className="text-xl text-gray-500 hover:text-red-500">×</button>
                      </div>
                  ))}
          </div>
      </div>
  );
}

export default MainContent;
