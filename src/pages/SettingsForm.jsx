import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import { useSettings } from "../context/SettingsContext";

const validationSchema = Yup.object({
  rows: Yup.number()
    .min(4, "Мінімум 4")
    .max(10, "Максимум 10")
    .required("Обов'язково"),
  columns: Yup.number()
    .min(4, "Мінімум 4")
    .max(10, "Максимум 10")
    .required("Обов'язково"),
  perMoveSeconds: Yup.number()
    .min(5, "Мінімум 5 сек")
    .max(60, "Максимум 60 сек")
    .required("Обов'язково"),
  difficulty: Yup.string()
    .oneOf(["easy", "normal", "hard", "custom"])
    .required("Обов'язково")
});

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
            <label className="font-semibold">Рядки:</label>
            <Field type="number" name="rows" className="border p-1 rounded" />
            <ErrorMessage name="rows" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Стовпці:</label>
            <Field type="number" name="columns" className="border p-1 rounded" />
            <ErrorMessage name="columns" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Час на хід (секунди):</label>
            <Field type="number" name="perMoveSeconds" className="border p-1 rounded" />
            <ErrorMessage name="perMoveSeconds" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Складність:</label>
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
              <option value="easy">Легко</option>
              <option value="normal">Нормально</option>
              <option value="hard">Важко</option>
              <option value="custom">Своя складність</option>
            </Field>
            <ErrorMessage name="difficulty" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex gap-2 mt-2">
            <Button type="submit" text="Зберегти" />
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Скасувати
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
