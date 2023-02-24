import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/booking/actions";
function InputSection() {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);

  const formValues = useRef({
    from: null,
    to: null,
    date: null,
    guests: null,
    ticketClass: null,
  });

  //handle form Values Change

  function handleChange(event) {
    formValues.current[event.target.name] = event.target.value;
  }

  //Handle Form Submit
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addBooking(formValues.current));
    event.target.reset();
  }

  return (
    <div class="mt-[160px] mx-4 md:mt-[160px] relative">
      <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form class="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* <!-- From --> */}
          <div class="des-from">
            <p>Destination From</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div class="des-from">
            <p>Destination To</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div class="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              class="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={handleChange}
            />
          </div>

          {/* <!-- Guests --> */}
          <div class="des-from">
            <p>Guests</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div class="des-from !border-r-0">
            <p>Class</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                class="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
                onChange={handleChange}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            class="addCity"
            type="submit"
            id="lws-addCity"
            onClick={() =>
              currentState.length === 3
                ? alert("Maximum Booking Limit Reached!")
                : null
            }
            disabled={currentState?.length === 3}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span class="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputSection;
