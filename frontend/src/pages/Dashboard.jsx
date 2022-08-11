import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGoals } from "../features/goals/goalSlice";
import { reset } from "../features/auth/authSlice";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, msg } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(msg);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(fetchGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch, isError, msg]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goal</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
