const Display = ({ sound }) => {
  return (
    <div
      id="display"
      className="bg-gray-200 col-span-full font-medium p-2 text-center"
    >
      {sound && <p>Sound: {sound}</p>}
      <p>&copy; FCC Drum Machine</p>
    </div>
  );
};

export default Display;
