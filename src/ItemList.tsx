import React, { useState } from "react";
import { CheckMarkIcon, PencilIcon, PlusIcon } from "./Icons";
import "./ItemList.css";
import { Input } from "./Input";
import { Button, IconButton } from "./Button";

type ItemListProps = {
  values: string[];
  onChange: (values: string[]) => void;
  children: React.ReactNode;
};

type ItemListItemProps = {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
};

const ItemListItem = ({ value, onChange, onRemove }: ItemListItemProps) => {
  const [inEditMode, setInEditMode] = useState(value === "");

  const finishEditing = () => {
    if (inEditMode) {
      onChange(value);
    }
    setInEditMode((v) => !v);
  };

  return (
    <div className="list-item">
      <div>
        {inEditMode ? (
          <Input
            ref={(el) => {
              el?.focus();
            }}
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                finishEditing();
              }
            }}
          />
        ) : (
          value
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

export const ItemList = ({ values, onChange, children }: ItemListProps) => {
  return (
    <div className="item-list">
      <div className="header">
        <div className="header-text">{children}</div>
        <Button
          variant="primary"
          className="add-button"
          onClick={() => onChange([...values, ""])}
        >
          <PlusIcon size={18} />
          <div>Add Item</div>
        </Button>
      </div>

      <div className="list-container">
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
