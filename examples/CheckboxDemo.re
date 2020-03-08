[%raw "require('@reach/checkbox/styles.css')"];
module MyCheckbox = {
  [@react.component]
  let make =
      (
        ~checked,
        ~value=?,
        ~defaultChecked=?,
        ~name=?,
        ~disabled=?,
        ~children,
        ~onChange=?,
      ) => {
    <span
      className=Css.(
        [
          selector(
            "[data-reach-custom-checkbox][data-state=\"checked\"]",
            [backgroundColor(rgb(255, 0, 0))],
          ),
          selector(
            "[data-reach-custom-checkbox][data-state=\"unchecked\"]",
            [backgroundColor(rgb(0, 255, 0))],
          ),
          selector(
            "[data-reach-custom-checkbox][data-state=\"mixed\"]",
            [backgroundColor(rgb(0, 0, 255))],
          ),
        ]
        |> style
      )>
      <label>
        <Checkbox.Custom
          checked
          ?value
          ?defaultChecked
          ?name
          ?disabled
          ?onChange
        />
        children
      </label>
    </span>;
  };
};

[@react.component]
let make = () => {
  let (checked, setChecked) = React.useState(() => `false_);
  let (checkedCustom, setCheckedCustom) = React.useState(() => `false_);

  <Container>
    <div>
      <label>
        <Checkbox.Mixed
          value="whatever"
          onChange={event => {
            setChecked(_ =>
              event->ReactEvent.Form.target##checked ? `true_ : `false_
            )
          }}
          checked
        />
        "I am feeling good today"->React.string
      </label>
      <label>
        <Checkbox.Mixed checked=`mixed />
        "Perma-mixed"->React.string
      </label>
      <div>
        <MyCheckbox
          checked=checkedCustom
          onChange={event =>
            setCheckedCustom(_ =>
              event->ReactEvent.Form.target##checked ? `true_ : `false_
            )
          }>
          "Custom checkbox"->React.string
        </MyCheckbox>
      </div>
      <div>
        <button
          onClick={_ => {
            setCheckedCustom(_ => `mixed);
            setChecked(_ => `mixed);
          }}>
          "I'm not sure how I feel!"->React.string
        </button>
      </div>
    </div>
  </Container>;
};