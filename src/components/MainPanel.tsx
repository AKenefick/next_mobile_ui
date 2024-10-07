import { useDataContext } from "../context/DataContext";

const MainPanel = () => {
  // Use the custom hook to access context data.
  const { data } = useDataContext();
  const {
    canDrink,
    canEat,
    numOfDocs,
    queue,
    status,
    triageTime,
    userId,
    avgAptTime,
  } = data;

  // Utility functions for calculating place in queue and wait time.
  const placeInQueue = (userId: string, queue: string[]): number => {
    return queue.indexOf(userId);
  };

  const waitTime = (
    queue: string[],
    userId: string,
    numOfDocs: number,
    avgAptTime: number
  ): number => {
    return (placeInQueue(userId, queue) / numOfDocs) * avgAptTime;
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-1">
      <div className="m-1 p-1 border-solid border-2 border-slate-950 rounded bg-slate-100">
        <p className="text-2xl font-bold">
          User Id: <span>{userId}</span>
        </p>
        <p>
          Triage Time: <span>{triageTime}</span>
        </p>
        <p>
          Status: <span>{status}</span>
        </p>
        <div className="p-2">
          <p>Instructions</p>
          <div>{canDrink ? <p></p> : <p>NO DRINKS</p>}</div>
          <div>{canEat ? <p></p> : <p>NO FOOD</p>}</div>
        </div>
      </div>
      <div className="m-1 p-1 border-solid border-2 border-slate-950 rounded bg-slate-100">
        <p className="font-bold">Place in Queue:</p>
        <ul className="p-1">
          {queue.map((item, index) =>
            index == placeInQueue(userId, queue) ? (
              <li
                className="bg-teal-500 font-bold text-slate-200 px-2 rounded"
                key={index}>
                {item}
              </li>
            ) : (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>
      <div className="m-1 p-1 border-solid border-2 border-slate-950 rounded bg-slate-100">
        <h1>Estimated Wait Time To See A Doctor:</h1>
        <p className="text-center">
          {waitTime(queue, userId, numOfDocs, avgAptTime).toFixed(1)} Hours
        </p>
      </div>
      <div className="m-1 p-1">
        <p className="font-bold">Contact Nurse:</p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded justify-center">
          Update Status
        </button>
      </div>
    </div>
  );
};

export default MainPanel;
