import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useSettings } from "../context/SettingsContext";

const validationSchema = Yup.object({
  rows: Yup.number()
    .min(4, "Minimum 4")
    .max(10, "Maximum 10")
    .required("Required"),
  columns: Yup.number()
    .min(4, "Minimum 4")
    .max(10, "Maximum 10")
    .required("Required"),
  perMoveSeconds: Yup.number()
    .min(5, "Minimum 5 sec")
    .max(60, "Maximum 60 sec")
    .required("Required"),
  difficulty: Yup.string()
    .oneOf(["easy", "normal", "hard", "custom"])
    .required("Required")
});

/**
 * Settings form allowing users to configure game parameters.
 *
 * Uses Formik and Yup validation.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.onClose
 */
export default function SettingsForm({ onClose }) {
  const { settings, updateSettings, applyPreset } = useSettings();
  const [difficultyLabel, setDifficultyLabel] = useState(settings.difficulty);

  useEffect(() => {
    const { rows, columns, perMoveSeconds } = settings;
    if (rows === 6 && columns === 7 && perMoveSeconds === 20) setDifficultyLabel("easy");
    else if (rows === 7 && columns === 7 && perMoveSeconds === 15) setDifficultyLabel("normal");
    else if (rows === 8 && columns === 8 && perMoveSeconds === 10) setDifficultyLabel("hard");
    else setDifficultyLabel("custom");
  }, [settings]);

  return (
    <Formik
      initialValues={{
        ...settings,
        difficulty: difficultyLabel
      }}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (values.difficulty !== "custom") {
          applyPreset(values.difficulty);
        } else {
          updateSettings({
            rows: Number(values.rows),
            columns: Number(values.columns),
            perMoveSeconds: Number(values.perMoveSeconds),
            difficulty: "custom"
          });
        }
        if (onClose) onClose();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-4 p-4 max-h-[70vh] overflow-auto">

          <div className="flex flex-col">
            <label className="font-semibold">Rows:</label>
            <Field type="number" name="rows" className="border p-1 rounded" />
            <ErrorMessage name="rows" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Columns:</label>
            <Field type="number" name="columns" className="border p-1 rounded" />
            <ErrorMessage name="columns" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Time per move (seconds):</label>
            <Field type="number" name="perMoveSeconds" className="border p-1 rounded" />
            <ErrorMessage name="perMoveSeconds" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Difficulty:</label>
            <Field
              as="select"
              name="difficulty"
              className="border p-1 rounded"
              onChange={(e) => {
                const val = e.target.value;
                setFieldValue("difficulty", val);
                if (val !== "custom") applyPreset(val);
              }}
            >
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
              <option value="custom">Custom</option>
            </Field>
            <ErrorMessage name="difficulty" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex gap-2 mt-2">
            <Button type="submit" text="Save" />
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
