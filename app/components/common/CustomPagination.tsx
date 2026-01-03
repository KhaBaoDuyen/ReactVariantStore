import Pagination from '@mui/material/Pagination';

interface CustomPaginationProps {
    total: number;          // tổng số trang
    page: number;           // trang hiện tại
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    total,
    page,
    onChange,
}) => {
    return (
        <Pagination
            count={total}
            variant="outlined"
            page={page}
            onChange={onChange}
            sx={{
                '& .MuiPagination-ul': {
                    gap: '8px',
                },
                '& .MuiPaginationItem-root': {
                    minWidth: 40,
                    height: 40,
                    borderRadius: '12px !important',
                    backgroundColor: '#fdecec',
                    color: '#111827',
                    fontWeight: 500,
                    border: 'none',
                },
                '& .MuiPaginationItem-root:hover': {
                    backgroundColor: '#fbd5d5',
                },

                '& .Mui-selected': {
                    backgroundColor: '#df5f0a',
                    color: '#fff',
                },

                '& .Mui-selected:hover': {
                    backgroundColor: '#df5f0a',
                },

                /* arrow (prev / next) */
                '& .MuiPaginationItem-previousNext': {
                    backgroundColor: 'transparent',
                    borderRadius: '12px',
                },

                '& .MuiPaginationItem-previousNext:hover': {
                    backgroundColor: 'transparent',
                },

            }}
        />
    );
};

export default CustomPagination;
