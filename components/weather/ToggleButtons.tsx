import { useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function ToggleButtons({
  onSelect = (f: any) => {
    return f
  },
}) {
  const [temptype, setTemptype] = useState<string | null>('max')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newTemptype: string | null
  ) => {
    setTemptype(newTemptype)
  }

  useEffect(() => {
    onSelect(temptype)
  }, [temptype])

  return (
    <ToggleButtonGroup
      value={temptype}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="max" aria-label="left aligned">
        MAX
      </ToggleButton>
      <ToggleButton value="min" aria-label="centered">
        min
      </ToggleButton>
      <ToggleButton value="both" aria-label="right aligned">
        Both
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
