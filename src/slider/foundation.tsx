import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { SliderProps } from '.';
import { useFoundation, emptyClientRect } from '@srmwc/base';

import { EventType, SpecificEventListener } from '@material/base/types';

import { cssClasses, MDCSliderFoundation, Thumb } from '@material/slider';

const defaultValues: Record<string, string> = {
  "min": "0",
  "max": "100",
  "step": "1",
};

export const useSliderFoundation = (
  props: SliderProps & React.HTMLProps<any>
) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      inputEl: true,
      thumbEl: true,
      sliderPinEl: true,
      trackActiveEl: true,
    },
    foundation: ({ rootEl, thumbEl, trackActiveEl, inputEl, emit }) => {
      return new MDCSliderFoundation({
        hasClass: (className: string) => rootEl.hasClass(className),
        addClass: (className: string) => rootEl.addClass(className),
        removeClass: (className: string) => rootEl.removeClass(className),
        getInputValue: () => props.value! as string,
        setInputValue: (...args) => console.log('not implemented', args),
        getInputAttribute: (name: string) => {
          return inputEl.ref?.getAttribute(name as any) ?? defaultValues[name]
        },
        setInputAttribute: (name: string, value: string) =>
          inputEl.ref?.setAttribute(name as any, value),
        removeInputAttribute: (name: string) =>
          inputEl.ref?.removeAttribute(name as any),
        getAttribute: (name: string) =>
          rootEl.getProp(name as any) as string | null,
        getBoundingClientRect: () =>
          rootEl.ref ? rootEl.ref.getBoundingClientRect() : emptyClientRect,
        addThumbClass: (className: string) => thumbEl.addClass(className),
        removeThumbClass: (className: string) => thumbEl.removeClass(className),
        registerThumbEventHandler: <K extends EventType>(
          thumb: Thumb,
          evtType: K,
          handler: SpecificEventListener<K>
        ): void => {
          thumbEl.addEventListener(evtType, handler);
        },
        registerInputEventHandler<K extends EventType>(
          thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void {
          inputEl.addEventListener(evtType, handler);
        },
        focusInput: (thumb: Thumb) => {
          inputEl.ref?.focus();
        },
        getThumbKnobWidth: (thumb: Thumb) => {
          return thumbEl.ref?.querySelector<HTMLElement>(`.${cssClasses.THUMB_KNOB}`)!
          .getBoundingClientRect()
          .width!;
        },
        getThumbBoundingClientRect: () => {
          return thumbEl.ref?.getBoundingClientRect() || emptyClientRect;
        },
        deregisterInputEventHandler<K extends EventType>(
            thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void {
          inputEl.removeEventListener(evtType, handler);
        },

        deregisterThumbEventHandler: <K extends EventType>(
          thumb: Thumb,
          evtType: K,
          handler: SpecificEventListener<K>
        ): void => {
          thumbEl.removeEventListener(evtType, handler);
        },
        registerBodyEventHandler: <K extends EventType>(
          evtType: K,
          handler: SpecificEventListener<K>
        ): void => {
          document.body && document.body.addEventListener(evtType, handler);
        },
        deregisterBodyEventHandler: <K extends EventType>(
          evtType: K,
          handler: SpecificEventListener<K>
        ): void => {
          document.body && document.body.removeEventListener(evtType, handler);
        },
        setThumbStyleProperty: (propertyName: string, value: any, thumb: Thumb) => {
          console.log(propertyName, value);
          thumbEl.ref?.style.setProperty(propertyName, value);
        },
        removeThumbStyleProperty: (propertyName: string, thumb: Thumb) => {
          thumbEl.setStyle(propertyName, '');
        },
        setPointerCapture: (pointerId) => {
          rootEl.ref?.setPointerCapture(pointerId);
        },
        setTrackActiveStyleProperty: (propertyName: string, value: any) => {
          trackActiveEl.ref?.style.setProperty(propertyName, value);
        },
        removeTrackActiveStyleProperty: (propertyName: string) => {
          trackActiveEl.ref?.style.removeProperty(propertyName);
        },
        isRTL: () =>
          !!rootEl.ref && getComputedStyle(rootEl.ref).direction === 'rtl'
      });
    }
  });

  // value
  useEffect(() => {
    let value =
      props.value !== undefined ? Number(props.value) : foundation.getValue();

    const min = foundation.getMin();
    const max = foundation.getMax();
    // make value in bounds
    if (value < min) {
      console.warn(
        `Attempted to set slider to ${value} which is less than min: ${min}`
      );
      value = min;
    }

    if (value > max) {
      console.warn(
        `Attempted to set slider to ${value} which is greater than max: ${max}`
      );
      value = max;
    }
    foundation.setValue(value);
  }, [props.value, foundation]);

  useLayoutEffect(() => {
    foundation.layout();
  }, [foundation])

  const handleInputOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change event');
    foundation.handleInputChange(evt as any);
    props.onChange?.(evt);
  };

  const handleInputOnFocus = () => {
    foundation.handleInputFocus(Thumb.END);
  };
  const handleInputBlur = () => foundation.handleInputBlur(Thumb.END);

  const handleOnPointerDown = (evt: React.PointerEvent) => {
    foundation.handlePointerdown(evt.nativeEvent);
  }

  const handleUp = () => foundation.handleUp();
  const handleDown = (evt: React.PointerEvent | React.MouseEvent | React.TouchEvent) => foundation.handleDown(evt.nativeEvent);

  const handleMousedownOrTouchstart = (evt: React.MouseEvent | React.PointerEvent) => {
    foundation.handleMousedownOrTouchstart(evt.nativeEvent);
  }

  const handleThumbMouseenter = () => {
    foundation.handleThumbMouseenter();
  }

  const handleThumbMouseleave = () => foundation.handleThumbMouseleave();

  const handleMove = (evt: PointerEvent | MouseEvent | TouchEvent)  => foundation.handleMove(evt);

  return {
    ...elements,
    handleInputOnChange,
    handleInputOnFocus,
    handleInputBlur,
    handleOnPointerDown,
    handleMousedownOrTouchstart,
    handleThumbMouseenter,
    handleThumbMouseleave,
    handleMove,
    handleUp,
    handleDown,
  };
};
