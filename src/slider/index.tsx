import * as RMWC from '@srmwc/types';
import React from 'react';
import { MDCSliderFoundation } from '@material/slider';
import { useClassNames, Tag, createComponent } from '@srmwc/base';
import { useSliderFoundation } from './foundation';

export type SliderOnChangeEventT = RMWC.CustomEventT<{
  value: number;
}>;

export type SliderOnInputEventT = RMWC.CustomEventT<{
  value: number;
}>;

/** A Slider component. */
export interface SliderProps {
  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onChange?: (evt: SliderOnChangeEventT) => void;
  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onInput?: (evt: SliderOnInputEventT) => void;
  /** The value of the Slider. */
  value?: number | string;
  /** The minimum value of the Slider. */
  min?: number | string;
  /** The maximum value of the Slider. */
  max?: number | string;
  /** A step to quantize values by. */
  step?: number | string;
  /** Displays the exact value of the Slider on the knob. */
  discrete?: boolean;
  /** Displays the individual step markers on the Slider track. */
  displayMarkers?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: React.Ref<MDCSliderFoundation>;
}

export type SliderHTMLProps = RMWC.HTMLProps<
  HTMLDivElement,
  Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput'>
>;

const SliderTrackMarkerContainer = React.memo(
  React.forwardRef(function SliderTrackMarkerContainer(
    props: any,
    ref: React.Ref<any>
  ) {
    return <div ref={ref} className="mdc-slider__track-marker-container"></div>;
  })
);

const SliderValueIndicator = function SliderValueIndicator(props: any) {
  return (
    <div className="mdc-slider__value-indicator-container" aria-hidden="true">
      <div className="mdc-slider__value-indicator">
        <span className="mdc-slider__value-indicator-text">{props.value}</span>
      </div>
    </div>
  );
};

const SliderThumb = React.memo(function SliderThumb(props: any) {
  return (
    <Tag {...props} className="mdc-slider__thumb">
      <div className="mdc-slider__thumb-knob"></div>
    </Tag>
  );
});

export const Slider: RMWC.ComponentType<SliderProps, SliderHTMLProps, 'input'> =
  createComponent<SliderProps, SliderHTMLProps>(function Slider(props, ref) {
    const {
      rootEl,
      thumbEl,
      sliderPinEl,
      inputEl,
      trackActiveEl,
      handleInputOnFocus,
      handleInputOnChange,
      handleOnPointerDown,
      handleMousedownOrTouchstart,
      handleThumbMouseenter,
      handleThumbMouseleave,
      handleInputBlur,
      handleMove,
      handleDown,
      handleUp,
    } = useSliderFoundation(props);

    const {
      value,
      min = 0,
      max = 100,
      name,
      discrete,
      displayMarkers,
      step = 1,
      disabled,
      onChange,
      onInput,
      children,
      foundationRef,
      ...rest
    } = props;

    const className = useClassNames(props, [
      'mdc-slider',
      {
        'mdc-slider--discrete': discrete,
        'mdc-slider--display-markers': displayMarkers && discrete
      }
    ]);

    const dataStep = step ? { 'data-step': step } : {};

    if (displayMarkers && !discrete) {
      console.warn(
        `The 'displayMarkers' prop on rmwc Slider will
        only work in conjunction with the 'discrete' prop`
      );
    }

    return (
      <Tag
        tabIndex={0}
        //eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role="slider"
        aria-valuemax={max as any}
        aria-valuenow={value as any}
        aria-label="Select Value"
        // onPointerDown={(evt) => {
        //   console.log('DOWN!!')
        //   handleOnPointerDown(evt);
        //   handleDown(evt)
        // }}
        onPointerUp={(evt: any) => {
          console.log('UPPP!')
          handleUp()
        }}
        onMouseDown={handleMousedownOrTouchstart}
        onMouseUp={handleUp}
        onPointerMove={handleMove}
        {...(disabled ? { 'aria-disabled': disabled } : {})}
        {...dataStep}
        {...rest}
        ref={ref}
        element={rootEl}
        className={className}
      >
        <Tag
          tag="input"
          element={inputEl}
          className="mdc-slider__input"
          type="range"
          onChange={(evt) => {
            onChange && onChange(evt);
            handleInputOnChange(evt);
          }}
          onFocus={handleInputOnFocus}
          onBlur={handleInputBlur}
          min={min}
          max={max}
          value={value}
          name={name}
          step={step}
          aria-label="Select value"
        />
        <div className="mdc-slider__track">
          <div className="mdc-slider__track--inactive"></div>
          <Tag className="mdc-slider__track--active">
            <Tag element={trackActiveEl} className="mdc-slider__track--active_fill" />
          </Tag>
          {displayMarkers && (
            <SliderTrackMarkerContainer />
          )}
        </div>
        {discrete && (
          <SliderValueIndicator value={sliderPinEl.getProp('value')} />
        )}
        <SliderThumb onMouseEnter={handleThumbMouseenter} onMouseLeave={handleThumbMouseleave} element={thumbEl} />
        {children}
      </Tag>
    );
  });
