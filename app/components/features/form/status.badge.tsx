type StatusSwitchProps = {
  value: boolean
  onChange: (value: boolean) => void
}

export default function StatusSwitch({
  value,
  onChange
}: StatusSwitchProps) {
  return (
    <div className="flex flex-col gap-2">
       <span className=" font-bold text-accent-600">
        Trạng thái
      </span>

      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 cursor-pointer accent-accent-600"
          />
        </div>

         <span
          className={`text-sm font-semibold transition-colors ${
            value ? "text-green-600" : "text-red-600"
          }`}
        >
          {value ? "Hiển thị" : "Không hiển thị"}
        </span>
      </label>
    </div>
  )
}