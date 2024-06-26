import { Box } from "@mui/material"
import { RichTreeView, useTreeViewApiRef } from "@mui/x-tree-view"
import { getItemDescendantsIds } from "dev-utils/functions";
import { useRef, useState } from "react";


const MUI_X_PRODUCTS = [
  {
    id: 'grid',
    label: 'SINACOFI',
    children: [
      { id: 'pickers-community', label: 'SINACOFI' },
    ],
  },
  {
    id: 'pickers',
    label: 'FUENTE TERCERO',
    children: [
      { id: 'SII', label: 'SII' },
      { id: 'charts-pro', label: 'PJUD' },
      { id: 'charts-premium', label: 'BOLETIN CONCURSAL' },
    ],
  },
  {
    id: 'charts',
    label: 'SUNAT API',
    children: [
      { id: 'charts-community', label: 'CONSULTA RUC' },
    ],
  },
  {
    id: 'tree-view',
    label: 'BOLETIN',
    children: [{ id: 'tree-view-community', label: 'BOLETIN' }],
  },
];


const TreeView = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  console.log('selectedItems: ', selectedItems)
  const toggledItemRef = useRef({})
  const apiRef = useTreeViewApiRef()

  const handleItemSelectionToggle = (_, itemId, isSelected) => {
    toggledItemRef.current[itemId] = isSelected;
  }

  const handleSelectedItemsChange = (_, newSelectedItems) => {
    setSelectedItems(newSelectedItems)

    const itemsToSelect = [];
    const itemsToUnselect = [];

    Object.entries(toggledItemRef.current).forEach(([itemId, isSelected]) => {
      const item = apiRef.current.getItem(itemId);
      if (isSelected) {
        itemsToSelect.push(...getItemDescendantsIds(item))
      } else {
        getItemDescendantsIds(item).forEach((descendantId) => {
          itemsToUnselect[descendantId] = true
        })
      }
    })

    const newSelectedItemsWithChildren = Array.from(
      new Set(
        [...newSelectedItems, ...itemsToSelect].filter(
          (itemId) => !itemsToUnselect[itemId]
        )
      )
    )

    setSelectedItems(newSelectedItemsWithChildren)

    toggledItemRef.current = {}





  }




  return (
    <Box>
      <RichTreeView
        checkboxSelection
        multiSelect
        items={MUI_X_PRODUCTS}
        apiRef={apiRef}
        selectedItems={selectedItems}
        onSelectedItemsChange={handleSelectedItemsChange}
        onItemSelectionToggle={handleItemSelectionToggle}  
      />
    </Box>
  )
}
export default TreeView