import React from "react";
import swal from "sweetalert";

interface FavFilterRowProps {
  filterdata: string;
  title: string;
  id: string | number;
}

const FavFilterRow: React.FC<FavFilterRowProps> = ({
  filterdata,
  title,
  id,
}) => {
  const Localization = {
    AreYouSure: "Are You Sure?",
    FavoriSilmekEminMisiniz: "Are you sure to delete your favorite filter?",
    EvetSil: "Yes, delete it",
    Cancel: "Cancel",
  };

  const handleDelete = () => {
    swal({
      title: Localization.AreYouSure,
      text: Localization.FavoriSilmekEminMisiniz,
      icon: "warning",
      buttons: {
        cancel: {
          text: Localization.Cancel,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: Localization.EvetSil,
          visible: true,
          closeModal: false,
        },
      },
    }).then((selected) => {
      if (selected) {
        console.log(`Deleting favorite with ID: ${id}`);

        // Perform delete operation here
      } else {
      }
    });
  };

  return (
    <div className="row favorite-filter-row">
      <div className="col-md-8">
        <p>{title}</p>
      </div>
      <div className="col-md-4 pl-0 pr-0 text-center">
        <a
          className="favorite-button-view"
          data-item={id}
          title="View Filter"
          onClick={() => console.log(`Viewing favorite filter: ${id}`)}
        >
          <img
            src="/app-assets/images/icons/fav-eye.svg"
            alt="View favorite filter"
          />
        </a>
        <a
          className="favorite-button-delete"
          data-item={id}
          title="Delete"
          onClick={handleDelete}
        >
          <img
            src="/app-assets/images/icons/fav-trash.svg"
            alt="Delete favorite filter"
          />
        </a>
        <span
          id={`FavoriteFilterDataList-${id}`}
          style={{ display: "none" }}
          aria-hidden="true"
        >
          {filterdata}
        </span>
      </div>
    </div>
  );
};

export default FavFilterRow;
