import React, { useState } from "react";
import {
  CheckMarkIcon,
  PencilIcon,
  PlusIcon,
} from "components/Icons";
import "./ItemList.css";
import { Input } from "components/Input";
import { Button, IconButton } from "components/Button";
import { ListItem } from "lib/use-wheel-data";
import { DubOrLSwitch } from "components/DubOrLSwitch";

type ItemListProps = {
  values: ListItem[];
  onChange: (values: ListItem[]) => void;
};

type ItemListItemProps = {
  value: ListItem;
  onChange: (value: ListItem) => void;
  onRemove: () => void;
};

const ItemListItem = ({ value, onChange, onRemove }: ItemListItemProps) => {
  const [inEditMode, setInEditMode] = useState(value.value === "");

  const finishEditing = () => {
    if (inEditMode) {
      onChange({
        ...value,
        value: value.value.trim(),
      });
    }
    setInEditMode((v) => !v);
  };

  return (
    <div className="list-item">
      <DubOrLSwitch
        value={value.isDub}
        onChange={v => onChange({ ...value, isDub: v })}
        className="switch"
      />

      <div className="value-input">
        {inEditMode ? (
          <Input
            ref={(el) => {
              el?.focus();
            }}
            defaultValue={value.value}
            onChange={(e) => onChange({ ...value, value: e.target.value })}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                finishEditing();
              }
            }}
            placeholder="Item text"
          />
        ) : value.value.length ? (
          value.value
        ) : (
          <i className="no-value">No Value</i>
        )}
      </div>

      <IconButton onClick={finishEditing}>
        {inEditMode ? <CheckMarkIcon size={20} /> : <PencilIcon size={20} />}
      </IconButton>

      <IconButton onClick={onRemove}>
        <PlusIcon size={20} className="rotate" />
      </IconButton>
    </div>
  );
};

export const ItemList = ({ values, onChange }: ItemListProps) => {
  return (
    <div className="item-list">
      <div className="header-text">Wheel Items</div>

      <div className="list-container">
        <Button
          variant="secondary"
          className="add-button"
          onClick={() => onChange([{ isDub: true, value: "" }, ...values])}
        >
          <div className="add-btn-content">
            <PlusIcon size={18} />
            <div>Add Item</div>
          </div>
        </Button>
        {values.map((value, i) => (
          <ItemListItem
            key={i}
            value={value}
            onChange={(updatedValue) => {
              const copy = [...values];
              copy[i] = updatedValue;
              onChange(copy);
            }}
            onRemove={() => onChange(values.filter((_, idx) => idx !== i))}
          />
        ))}
      </div>
    </div>
  );
};
