import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} Created Successfully`);
      reset();
      redirect();
    } else {
      setLoading(false);
      const result = await response.json(); // Get the response error message
      if (response.status === 409) {
        toast.error("The Given Warehouse Stock is NOT Enough");
      } else {
        toast.error(result.message || "Something Went Wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
    toast.error("Network Error: Please try again later.");
  }
}

export async function makePutRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      const result = await response.json(); // Get the response error message
      toast.error(result.message || "Something Went Wrong");
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
    toast.error("Network Error: Please try again later.");
  }
}
