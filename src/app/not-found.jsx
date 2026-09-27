function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="aura text-orange-600">
        <div className="card bg-base-100 text-base-content ">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row items-center gap-4 h-20 lg:h-30 w-50  lg:w-70">
              <p className="text-2xl font-bold">404</p>
              <p>This page could not be found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
